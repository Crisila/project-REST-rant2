# Project REST-Rant

REST-Rant is an app where users can review restaurants.




| **Method** | **Path**                 | **Purpose**                                      |
|------------|--------------------------|--------------------------------------------------|
| GET        | /                        | Home Page                                        |
| GET        | /places                  | Places index page                                |
| POST       | /places                  | Create new place                                 |
| GET        | /places/new              | Form page for creating a new place               |
| GET        | /places/:id              | Details about a particlular place                |
| PUT        | /places/:id              | Update a particular place                        |
| GET        | /places/:id/edit         | Form page for editing an existing place          |
| DELETE     | /places/:id              | Delete a particular place                        |
| POST       | /places/:id/rant         | Create a rant(commment) about a particular place |
| DELETE     | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET        | *                        | 404 page (matches any route not defined above)   |


| **Field** | **Type**  |
|-----------|-----------|
| _id       | Object ID |
| name      | string    |
| city      | string    |
| state     | string    |
| cuisines  | string    |
| pic       | string    |


sushi-rest
Photo by <a href="https://unsplash.com/@jckbck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jakub Dziubak</a> on <a href="https://unsplash.com/photos/sushi-on-black-ceramic-plate-iOHJKJqO6E0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

second-rest
Photo by <a href="https://unsplash.com/@kayleighharrington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">kayleigh harrington</a> on <a href="https://unsplash.com/photos/group-of-people-inside-the-restaurant-yhn4okt6ci0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  

