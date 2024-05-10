// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  
  CURRENCY: 'GBP',
  CURRENCY_SYMBOL: '£',

  // Ads
  CollectionsUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/collections",
  ChefsUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/chefs",
  CuisinesUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/cuisines",
  DishesUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/dishes",
  ReviewsUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/reviews",
  ServiceAreasUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/serviceareas",
  MenusUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/menus",
  CalendersUrl: "https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/calendars",
  GroupsUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/groups',
  ProductsUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/products',
  SupplierUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/suppliers',
  FeedbacksUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/feedbacks',
  PartyBundlesUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/party-bundles',
  PostcodeDistrictsUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/postcode-districts',

// Orders
  FoodOrdersTrackingUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/foods-tracking',
  FoodOrdersUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/foods',
  FoodOrderSearchUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/foods/search',
  FoodOrdersStripePaymentsUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/foods/stripe-payments',
  FoodOrdersPaymentIntentUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/foods/stripe-payments/payment-intent',
  ProductOrdersUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/products',
  ProductOrdersSearchUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/products/search',
  ProductOrdersPaymentsUrl: 'https://order-service-9ff7ad1220e2.herokuapp.com/orders/v1/products/stripe-payments',


  // Auth
  LoginUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/auth/token',
  LogoutUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/auth/logout',
  RegisterUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/users/signup',
  PasswordResetInitiateUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/auth/passwords/reset_initiate',
  PasswordResetSubmitUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/auth/passwords/reset_submit',
  GetCustomerPreferencesUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/customers/replace-me/preferences',
  CreateOrUpdateCustomerPreferencesUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/customers/preferences',
  CreateContactsUrl:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/contacts',
  UpdatePersonalDetails:'https://bigtree-auth-service-672f06320174.herokuapp.com/v1/users/update_personal',
 

  //Ads
  AdPropertyUrl: 'https://ad-service-bd07dee8092c.herokuapp.com/ads/v1/properties',

  /** RapidAPI  */
  X_RapidAPI_Url:
    'https://samsinfield-postcodes-4-u-uk-address-finder.p.rapidapi.com/ByPostcode/json',
  X_RapidAPI_Host:
    'samsinfield-postcodes-4-u-uk-address-finder.p.rapidapi.com',
  X_RapidAPI_Key:
    '249a5c6ab3mshce3cf38f2ca8130p195a93jsn3ad1c6002c20',
  CUSTOMER_APP_ACCESS_TOKEN:
    'eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJDdXN0b21lckFwcCIsImxhc3ROYW1lIjoiQ3VzdG9tZXJBcHAiLCJjbGllbnRUeXBlIjoiQ3VzdG9tZXJBcHAiLCJtb2JpbGUiOiIwNzk3OTE5MTE3NiIsImN1c3RvbWVySWQiOiI2NThlY2YxYjUyOTAyNDI0OTc2MzYxMDUiLCJleHAiOjE3MzkwNDg0NDIsInN1YiI6IlRoZUN1c3RvbWVyQXBwQGdtYWlsLmNvbSJ9.k0sPPCwRHRjZjh20koEAOSY1UNdNaggQJaqc0TfcmdbhpNIiHOHmtcZxu2Jp3kDSMNCfmoKyQX51eTF71jWWfQ',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
