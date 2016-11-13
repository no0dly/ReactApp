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
});
