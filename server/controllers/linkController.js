const uuid = require('uuid');
const tryCatchWrapper = require('../utils/tryCatchWrapper');
const { Link, VisitOption } = require('../models/models');
const ApiError = require('../error/ApiError');
const axios = require('axios');

class LinkController {
    async create(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { name, allergy } = req.body;
                const link_uuid = uuid.v4();
                const visitOption = await VisitOption.findOne({ where: { code: 'later' } });
                await Link.create({ name, allergy, link_uuid, visitOptionId: visitOption.id });
                const link = await Link.findOne({
                    where: { link_uuid }, include: [
                        {
                            model: VisitOption,
                            required: false
                        }
                    ]
                });
                return res.json(link);
            },
            req, res, next, 'LinkController.create'
        )
    }

    async edit(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { link_uuid } = req.params;
                let { name, allergy, code, gender, send_telegram } = req.body;
                if (send_telegram === undefined) {
                    send_telegram = true;
                }
                const link = await Link.findOne({ where: { link_uuid } });
                if (!link) {
                    return next(ApiError.badRequest({ function: 'LinkController.edit', message: 'Объект не найден' }));
                }
                let result;
                if (code) {
                    const visitOption = await VisitOption.findOne({ where: { code } });
                    if (!visitOption) {
                        return next(ApiError.badRequest({ function: 'LinkController.edit', message: 'Объект опции не найден' }));
                    }

                    result = await Link.update(
                        { name, allergy, gender, visitOptionId: visitOption.id },
                        { where: { link_uuid } }
                    );
                } else {
                    result = await Link.update(
                        { name, allergy, gender },
                        { where: { link_uuid } }
                    );
                }
                const newLink = await Link.findOne({
                    where: { link_uuid }, include: [
                        {
                            model: VisitOption,
                            required: false
                        }
                    ]
                });
                if (send_telegram) {
                    let fields = [
                        '<b>Зафиксировано изменение профиля</b>',
                        '<b>Ссылка на приглашение</b>: ' + `<a href="${process.env.CLIENT_URL}/${req.params.link_uuid}">${process.env.CLIENT_URL}/${req.params.link_uuid}</a>`,
                        '<b>Имя приглашенного</b>: ' + newLink.name,
                        '<b>Присутствие</b>: ' + newLink.visit_option.value,
                        '<b>Аллергия</b>: ' + newLink.allergy
                    ]
                    let msg = ''
                    //проходимся по массиву и склеиваем все в одну строку
                    fields.forEach(field => {
                        msg += field + '\n'
                    });
                    //кодируем результат в текст, понятный адресной строке
                    msg = encodeURI(msg)

                    await axios.post(
                        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${msg}`
                    )
                }
                return res.json({ link: newLink, result });
            },
            req, res, next, 'LinkController.edit'
        )
    }

    async delete(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { link_uuid } = req.params;
                const link = await Link.findOne({
                    where: { link_uuid }, include: [
                        {
                            model: VisitOption,
                            required: false
                        }
                    ]
                });
                if (!link) {
                    return next(ApiError.badRequest({ function: 'LinkController.delete', message: 'Объект не найден' }));
                }

                await Link.destroy(
                    {
                        where: { link_uuid }
                    }
                );

                return res.json({ link, result: 1 })
            },
            req, res, next, 'LinkController.delete'
        )
    }

    async getById(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { link_uuid } = req.params;
                const link = await Link.findOne(
                    {
                        where: { link_uuid },
                        include: [
                            {
                                model: VisitOption,
                                required: false
                            }
                        ]
                    }
                );
                return res.json(link);
            },
            req, res, next, 'LinkController.getById'
        )
    }

    async getAll(req, res, next) {
        tryCatchWrapper(
            async () => {
                const links = await Link.findAll(
                    {
                        include: [
                            {
                                model: VisitOption,
                                required: false
                            }
                        ]
                    }
                );
                return res.json(links);
            },
            req, res, next, 'LinkController.getAll'
        )
    }

    async getVisitOptions(req, res, next) {
        tryCatchWrapper(
            async () => {
                const visitOptions = await VisitOption.findAll();
                return res.json(visitOptions);
            },
            req, res, next, 'LinkController.getVisitOptions'
        )
    }

}

module.exports = new LinkController();