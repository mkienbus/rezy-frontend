# Rezy App
## Description:
This application is meant to be a demonstration of the skills I learned in my programming course. It utilizes a PostgreSQL database, Ruby on Rails backend, and the React framework for the frontend. I am currently working on implementing more MUI tools, such as the calendar. My focus on this application was the functionality between the back and front ends. 
## Requirements:  
| Requirement | Version |
| --- | --- |
| Ruby | 2.7.5 |
| Rails | 7.0.2.3 |
| PostgreSQL | 14.1 |
| Node | 16.13.2 |
| React | 17.0.2|
| MUI | 5.5.3 |
| Date FNS | 2.28.0 |

## Installation:
- **Ruby**:  
  Run `rvm install 2.7.5 --default`  
  Also install the latest versions of bundler and rails
  ```
  gem install bundler
  gem install rails
  ```
- **PostgreSQL**  
  Easily installable on OSX with homebrew.  
  Run `brew install postgresql`  
  After installation is complete, run `brew services start postgresql` to start Postgres services.  
- **Node**  
  Run
  ```
  nvm install 16
  nvm use 16
  ```
  to install and set node 16 as default. 
- **React**  
  Run `npm install react@17.0.2`

- **Date FNS**  
  Run `npm install @date-io/date-fns`

- **MUI**  
  Run `npm install @mui/material @emotion/react @emotion/styled`

## Usage
- The application initially directs the user to a login page, with an option to create a username for new users. If you do not run `rails db:seed` to populate with the provided seed file, you can create your own username at this time.  
  
<!-- ![login](image path)   -->

- After logging in or creating a username/password to login with, you are directed to the home page which renders a list of all your restaurants and their attributes.  
  
<!-- ![home](image path)   -->
- The home page also has a navigation bar and logout button at the top. You can also edit information on the rendered items in your list.  
  
<!-- ![usage](./images/usageGif.gif)   -->
## Roadmap  
I am currently working on replacing the old calendar and time selection tool I was using with MUI's datetime picker tool. 
## License
MIT License

Copyright (c) [2022] [Michael Kienbusch]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.