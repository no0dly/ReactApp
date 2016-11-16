var expect = require('expect');
var VkAPI = require('VkAPI');

describe('API',() => {
    it('Should exist', () => {
        expect(VkAPI).toExist();
    });
    describe('localStorage',() => {
        beforeEach( () => {
            localStorage.removeItem('news');
        });
        it('Should set valid news array', () => {
            var news = [{
                id: 1,
                title: 'Putin',
                description: 'President',
                createdAt: 11123
            }];

            var res = VkAPI.setNews(news);

            var actualNews = VkAPI.getNews();

            expect(actualNews).toEqual(news);
        });
    });

    describe('',() => {
        var news = [{
                id: 1,
                title: 'Putin',
                description: 'President',
                createdAt: 1231231,
                editMode: true
            },{
                id: 2,
                title: 'Vadim',
                description: 'Non President',
                createdAt: 1231231
            },
            {
                id: 3,
                title: 'Stefa',
                description: 'Non President',
                createdAt: 1231231
            }
        ];
        it('filterAndSortNews', () => {

        });
    });

});
