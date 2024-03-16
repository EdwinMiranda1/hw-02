function crearUsuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return { name, ci, email };
}

const usuario = crearUsuario("user", "123456789", "user@example.com");
console.log(usuario);