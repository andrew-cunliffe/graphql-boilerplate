Feature: Landing page

    Scenario: Check the site opens correctly
        Given the "landing" page is open
        Then the "header" contains the image "logo"
        And the "footer" contains the image "logo"
