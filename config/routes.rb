Rails.application.routes.draw do

  devise_for :users

  devise_scope :user do
    authenticated :user do
      root "static_pages#index", as: :authenticated_root
      get "sign_out" => "devise/sessions#destroy"
    end

  unauthenticated do
      root 'static_pages#index', as: :unauthenticated_root
    end
  end

  get 'current_user' => "users#show"
  namespace :api, defaults: {format: :json} do
    resources :journeys
  end
end
