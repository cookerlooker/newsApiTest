            
            $(document).ready(function(){
            $('.modal').modal();
            });
        
            var newsAPI = '2cbc0b4812554558a06c7e9c28d05b49';
            var newsQueryUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
            //var response = 'newsQueryUrl' + 'newsAPI';

            $.ajax ({
                url: newsQueryUrl + newsAPI, 
                method: "GET"
            }).then(function(res) {

                console.log(res);

                for (var i = 0; i < res.articles.length; i++) {

                    //console.log (res.articles[i].description);

                    var item = $('<li>');
                    //item.text(res.articles[i].title);
                    var newsHeader = $('<div id="newsHeader">');
                    newsHeader.text(res.articles[i].title);
                    var newsImage = $('<img class="materialboxed" width="450">');
                    newsImage.attr("src",res.articles[i].urlToImage);
                    
                    
                   //var newsButton = $('a href="newsButton"<button>Visit page now</button>')
                    var newsButton = $('<button <a> Visit Page Now>').attr("href",res.articles[i].url);
                   // newsButton.click("href",res.articles[i].url);
                    //newsButton.attr("href",res.articles[i].url);
                    //var newsUrl = $('<a>').attr("href",res.articles[i].url);
                    //newsUrl.attr("href",res.articles[i].url);
                    //console.log (res.articles[i].url);
                    //console.log ('I am your button');
                    

                    //<a href="#"><button>Text</button></a>
                     $('.newsButton').click(function() {
   window.location = (res.articles[i].url) + this.url;
 });



                    item.append(newsHeader);
                    item.append(newsImage);
                    //item.append(newsUrl);
                    item.append(newsButton)

                    $('#breakingNews').append(item);




                }

            
                
                

            }); 


    
//var $newbutton= $('<input/>').attr({ type: 'button', location:locationname , name:'btn1', class:'btn btn-success', value:'Add For'+locationname});
    
            




                      

                        

            