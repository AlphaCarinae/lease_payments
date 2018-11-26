# Lease payments

Lease payments is a React front-end for viewing the payment details for any given lease id on the :Different test (backend) server. This has been done as a code test application for :Different and has no other purpose at this point. The app has been deployed using github-pages [here](https://alphacarinae.github.io/lease_payments/).

## About

“Different” offers a web-based app to the tenants to manage their lease. Due to the
high demand, the product owner decided to release a new feature that allows tenants
to see a list of their past and upcoming rent payments. This is how this feature has been implemented by me.

## How to

You will need you lease id number to get the payment period details for each lease. enter your lease id in the search form and click search.

## Technical
This app has been written using react frontend framework from facebook. There are three main components:
  - Search: which is the top component on the page including the logo and the search form
  - Results: which is where the lease information and payment period will show up after information is fetched from the backend
  - dateFunctions: is the collection of functions written to make the calculations for the resulting table possible
