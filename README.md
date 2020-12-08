# Demo Project used to illustrate end-to-end testing with Cypress

### Start backend (java spring-boot)
`gradle bootRun`
- backend REST API app will be started on [http://localhost:8080](http://localhost:8080)

### Test backend REST API with `httpie`
- List all seeded Groups in database: `http GET :8080/api/groups`
- Create a new Group: `http POST :8080/api/group name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey`
- View the just created Group: `http :8080/api/group/5`
- Update address of above created tech sharing Group: `http PUT :8080/api/group/5 name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey address=Saray`
- Delete the create tech sharing Group: `http DELETE :8080/api/group/5`

### Setup frontend (snowpack svelte)
`cd app && yarn`

### Start frontend webapp
`cd app && yarn start`
