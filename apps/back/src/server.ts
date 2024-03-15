import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { PostRoute } from '@routes/posts.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

console.log('server.js : process.env.NODE_ENV : ', process.env.NODE_ENV);

const app = new App([new UserRoute(), new PostRoute(), new AuthRoute()]);

app.listen();
