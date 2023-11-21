class UrlsController < ApplicationController

    # app.get('/path', (req, res) => {
    #      const templateVars = {property1: 'value'};
    #     res.render('path', templateVars);
    # });

    def index
        @urls = Url.all
        render json: @urls
    end

    def new

    end

    def create
    end


end
