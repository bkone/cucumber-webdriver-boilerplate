Feature: Look for kittens in Google
         As a not very smart user 
         I want to make a query in Google
         So I can find cute kittens pictures in the internet
         
         Scenario: Visit Google.com webpage and look for kittens
         
         Given I am on Google homepage
         When I enter "kittens" in the search box
         And I press the "Google Search" button
         And I press the "Images" link
         Then I see kittens in the results page