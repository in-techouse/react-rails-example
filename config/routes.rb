Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :hello
  root 'hello_world#index'
  
  get '*path', to: 'home#index', via: :all
end
