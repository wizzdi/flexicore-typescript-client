

## How To Install
add `"@flexicore/flexicore-client": "^2.2.7"` to your package.json

## How To Use
import the required service

    import { UserService} from'@flexicore/flexicore-client';

create a factory

    export  let  userServiceFactory = (http: HttpClient) =>  new  UsersService(http, SERVER_ADDRESS, new  UserService());

in the import section add:

    HttpClientModule,

in the provide section add:

    { provide:  'BASE_PATH', useValue:  SERVER_ADDRESS },
and 

    {provide:  UsersService, useFactory:  userServiceFactory, deps: [HttpClient]},

