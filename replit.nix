with import <nixpkgs> { };


{ pkgs }: {
    name = "frissyn";

    buildInputs = with pkgs; [
        pkg-config
        openssl
        zlib
    ];

	deps = with pkgs; [
        gh
        yarn
		nodejs-17_x
		nodePackages.typescript-language-server
	];

    env = {
        LANG = "en_US.UTF-8";
        PKG_CONFIG_PATH = pkg-config.outPath;
    };
}