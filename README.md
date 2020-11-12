# Thortful: Dad Joke Demo 🤣

## Overview 

  Get creative with the inside of your Dad's birthday card this year and insert a dad joke that he's guaranteed to find much funnier than everyone else! This app is designed to make writing your card as entertaining as choosing your card from [Thortful](https://www.thortful.com/).

## Built with
* Angular 9
* Bootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Current Features
* Generate a random dad joke from the Home page
* Search for a joke from the Search page and get a list of jokes that match your search term
* Select a joke from the Search page to 'send to home' and see a preview of the joke inside your card

## To Do...
With more time to code and research, I would like to add the following features...
* Pagination 
* Update search url with search terms (as with Home)
* User input: once a joke has been selected, the user could finalise their choice from the Home page and then add their own message below
* Add a 'Saved Jokes' view, populated by jokes the users has chosen to save from the search results screen
* Implement simple state management
  * To enable above 'Saved Jokes' feature
  * To display loading spinner by setting a 'loading' state whislt awaiting responses from the API 
* Create animated transitions between component
* Add Unit Tests to achieve full code coverage
* Add E2E tests

## Getting Started

### Prerequisites 

* yarn
```sh
brew install yarn
```

1. Clone the repo
```sh
git clone https://github.com/annabelhayes/thortful.git
```
2. Install yarn packages
```sh
yarn 
```

### Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

### Running unit tests
Run ng test to execute the unit tests via Karma.

### Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor.

### Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

## Acknowledgements
* [Loading.io](https://github.com/loadingio)
