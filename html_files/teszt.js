function eredmeny() {
    let pontZeusz = 0;
    let pontPoszeidon = 0;
    let pontHera = 0;
    let pontAthene = 0;

    const kerdesek = ["allat", "taj", "italok", "desszertek", "hazak"];

    for (let i = 0; i < kerdesek.length; i++) {
        const valasztasok = document.getElementsByName(kerdesek[i]);
        let valasztott = false;

        for (let j = 0; j < valasztasok.length; j++) {
            if (valasztasok[j].checked) {
                valasztott = true;
                if (valasztasok[j].value === "zeusz") {
                    pontZeusz++;
                } else if (valasztasok[j].value === "poszeidon") {
                    pontPoszeidon++;
                } else if (valasztasok[j].value === "hera") {
                    pontHera++;
                } else if (valasztasok[j].value === "athene") {
                    pontAthene++;
                }
            }
        }

        if (!valasztott) {
            alert("Kérlek, válaszolj minden kérdésre!");
            return; /* Ha egy kérdésnél hiányzik a válasz, akkor visszatér */
        }
    }

    /* Maximum pont meghatározása */
    const maxPont = Math.max(pontZeusz, pontPoszeidon, pontHera, pontAthene);

    const eredmenyZeusz = document.getElementById("tesztZeusz");
    const eredmenyPoszeidon = document.getElementById("tesztPoszeidon");
    const eredmenyHera = document.getElementById("tesztHera");
    const eredmenyAthene = document.getElementById("tesztAthene");

    /* Eredmények elrejtése */
    eredmenyZeusz.style.display = "none";
    eredmenyPoszeidon.style.display = "none";
    eredmenyHera.style.display = "none";
    eredmenyAthene.style.display = "none";

    /* Nyertes eredmény megjelenítése */
    if (maxPont === pontZeusz) {
        eredmenyZeusz.style.display = "block";
    } else if (maxPont === pontPoszeidon) {
        eredmenyPoszeidon.style.display = "block";
    } else if (maxPont === pontHera) {
        eredmenyHera.style.display = "block";
    } else if (maxPont === pontAthene) {
        eredmenyAthene.style.display = "block";
    }
}
