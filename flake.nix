{
    description = "Zola Shell";
    inputs.nixpkgs.url = "github:NixOS/nixpkgs";

    outputs = { self, nixpkgs }: {
        devShells.x86_64-linux.default =
            let pkgs = nixpkgs.legacyPackages.x86_64-linux;
            in pkgs.mkShell {
                buildInputs = [
                    pkgs.zola
                    pkgs.zsh
                ];

                shellHook = ''
                    exec zsh
                '';
            };
    };
}
