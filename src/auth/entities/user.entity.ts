
//sale error porque no se importa el @Pro de Moongoose
export class User {
    @Pro({ unique: true, require: true})
    email: string;

    @Pro({ require: true})
    namme: string;

    @Pro({ minlenght: 6, require: true})
    password: string;

    @Pro({ default: true})
    isActive: string;

    @Pro({ type: [String], default ['user'] })
    roles: string[];
}
