Rails.application.routes.draw do

  root   'static_pages#home'
  get    '/help',    to: 'static_pages#help'
  get    '/about',   to: 'static_pages#about'
  get    '/table1',  to: 'static_pages#table1'
  get    '/table2',  to: 'static_pages#table2'
  get    '/table3',  to: 'static_pages#table3'
  get    '/table4',  to: 'static_pages#table4'
  get    '/room1',   to: 'rooms#show'
  get    '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users
end
