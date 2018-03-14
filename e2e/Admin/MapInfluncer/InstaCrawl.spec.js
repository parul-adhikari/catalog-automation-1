browser.get("https://www.instagram.com/_itsjamielee/")
var max_date;
var min_date;
var post_date;
var first_post;
var date_time_of_post;
var next_crawl_button;
var value_of_date='';


describe('Instagram', function () {
    it('Crawling', () => {
        first_post = element(by.css('._e3il2'));
        browser.wait(protractor.ExpectedConditions.presenceOf(first_post), 1000)
        first_post.click();




        max_date = new Date('2018-03-19T00:00:00.000Z');
        min_date = new Date('2018-01-14T00:00:00.000Z');



            date_time_of_post = element(by.css("time[class*='_p29ma']"));
            browser.wait(protractor.ExpectedConditions.presenceOf(date_time_of_post), 1000)
        date_time_of_post.getAttribute('datetime');
            console.log("test ="+ date_time_of_post.getAttribute('datetime'))

            // date_time_of_post.getAttribute('datetime').then((value) => {
            //     value_of_date= value
            //     console.log("inside ="+ min_date)
            //
            //
            //
            // })


            console.log("min date = " + min_date+ "post date = " +value_of_date)

        browser.getCurrentUrl().then((URL) => {
            console.log('outside Loop = ' + URL)
        })

        function postCrawl() {


            browser.sleep(1000);

            element(by.css('._b0tqa')).getText().then((value) => {
                console.log("value = " + value)

            })
            browser.sleep(1000);
            browser.getCurrentUrl().then((URL) => {
                console.log('currentURL = ' + URL)
                next_crawl_button = element(by.css("a[class*='_3a693']"));
                next_crawl_button.click();
                browser.sleep(1000);
            })


        }

    })
})
