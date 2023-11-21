Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  # const controllerFunction = (req, res) => {
  #   res.render('path');
  # }

  # app.get('/path', controllerFunction);

  get '/path', to: 'pages#path' # an individual route by hand

  resources :urls, only: [:index, :new, :create]

  resource :dashboard, except: [:new]

end
