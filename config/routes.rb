Rails.application.routes.draw do
  root to: 'pages#home'
  get 'Accueil', to: 'pages#home' , as: :accueil
  get 'A propos', to: 'pages#about', as: :about
  get 'Bilan', to: 'pages#bilan', as: :bilan
  get 'Missions', to: 'pages#mission', as: :mission
  get 'Entreprise', to: 'pages#entreprise', as: :entreprise
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
