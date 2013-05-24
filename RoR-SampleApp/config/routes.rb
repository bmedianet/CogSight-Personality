BmnPersonalityApiSkeletonRor::Application.routes.draw do
  scope '(bmn-personality-api-skeleton-ror)' do
    get "home/index"

    match 'all_authors'               =>  'home#all_authors',               :via => :get
    match 'authors_by_personality'    =>  'home#authors_by_personality',    :via => :get
    match 'author'                    =>  'home#author',                    :via => :get
    match 'remove_author'             =>  'home#remove_author',             :via => :get
    match 'add_authors'               =>  'home#add_authors',               :via => :post
    match 'get_author'                =>  'home#get_author',                :via => :get
    match 'get_authors_by_personality' => 'home#get_authors_by_personality', :via => :get
    match 'get_all_authors'           =>  'home#get_all_authors',           :via => :get
    match 'delete_author'             =>  'home#delete_author',             :via => :post

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'
    root :to => 'home#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
  end
end
