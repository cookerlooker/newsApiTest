            
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

            

               
            // Create the  list group to contain the articles and add the article content for each
                   
            //var $newsList = $("<ul>");
            //$newsList.addClass("newsList-Group");

            // Add the newly created element to the DOM
            //$("#article-section").append($articleList);

                    //for (var i = 0; i < res.articles.length; i++){

                        //res.articles.length = 5;

                        //var topNews = res.articles[i];



                       
            


                   


                //}
             //}
                

            }); 



    
            




                      

                        

            