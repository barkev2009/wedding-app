import styles from '../screens/screen.module.css';
import ym from 'react-yandex-metrika';
import ExcelJS from 'exceljs';

export const clickDressHandler = (e) => {
    ym('reachGoal', 'circle-click');
    const ITER = 20, SCALE_COUNT = 100;
    const newElem = document.createElement('div');
    let target = e.target;
    if (!e.target.classList.contains(styles.purple) && !e.target.classList.contains(styles.greenc) && !e.target.classList.contains(styles.brown) && !e.target.classList.contains(styles.coffee)) {
        target = e.target.parentNode;
    }
    newElem.classList.add(styles.circle);

    const color = window.getComputedStyle(target).backgroundColor;
    newElem.style.border = `5px solid ${color}`;
    target.appendChild(newElem);
    for (let i = 1; i < SCALE_COUNT; i++) {
        setTimeout(
            () => {
                newElem.style.transform = `scale(${i})`;
            }, ITER * i
        );
    }
    setTimeout(
        () => {
            newElem.style.transition = 'all 0s';
            newElem.style.transform = 'scale(1)';
            newElem.style.border = 'none';
        }, SCALE_COUNT * ITER
    );
}

export const exportHandler = (links) => {
    return () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Отчет");

        sheet.getRow(1).border = {
            bottom: { style: "thick", color: { argb: "000000" } }
        };

        sheet.getRow(1).font = {
            bold: true
        };

        sheet.columns = [
            {
                header: "Ссылка",
                key: "link_uuid",
                width: 10,
            },
            {
                header: "Имя",
                key: "name",
                width: 20,
            },
            {
                header: "Аллергия",
                key: "allergy",
                width: 20,
            },
            {
                header: "Присутствие",
                key: "visitOption",
                width: 20,
            },
            {
                header: "Ссылка отправлена",
                key: "link_sent",
                width: 15,
            }
        ];

        links.map(
            async ({ link_uuid, allergy, name, visit_option, link_sent }, index) => {
                sheet.addRow({
                    link_uuid: window.location.origin + '/' + link_uuid,
                    allergy,
                    name,
                    link_sent,
                    visitOption: visit_option.value
                });
                sheet.getCell(`A${index + 2}`).value = {
                    text: window.location.origin + '/' + link_uuid,
                    hyperlink: window.location.origin + '/' + link_uuid
                }
            }
        )
        workbook.xlsx.writeBuffer().then(function (data) {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "wedding-report.xlsx";
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    }
}