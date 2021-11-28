Rails.application.routes.draw do
  
  resources :materials, only: [:index, :show]
  resources :directors, only: [:index, :show]
  resources :galleries, only: [:index, :show]
  resources :pieces, only: [:index, :show, :create, :update, :destroy]
  resources :artists, only: [:index, :show]


  #  get "/me", to: "users#show"
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
