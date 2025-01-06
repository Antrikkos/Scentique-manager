
export default {
    name: 'productGroup',
    type: 'document',
    title: 'Product Group',
    fields: [
        {
            name: 'name',
            title: 'Name of Group',
            type: 'string',
        },
        {
            name: 'groupProducts',
            type: 'array',
            title: 'Group Products',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'product'}
                    ]
                }
            ],
        },
    ]
}
