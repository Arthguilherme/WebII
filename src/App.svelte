<script>
    import { evaluate } from "mathjs";

    let visor = "";

    function handleClick(valor) {
        if (valor === "C") {
            visor = "";
            return;
        }
        if (valor === "=") {
            try {
                visor = String(evaluate(visor));
            } catch {
                visor = "Erro";
            }
            return;
        }
        visor += valor;
    }
</script>

<main>
    <div class="container">
        <h1>Calculadora</h1>
        <input type="text" bind:value={visor} readonly id="visor" />

        <div class="buttons">
            <button class="botao" on:click={() => handleClick("1")}>1</button>
            <button class="botao" on:click={() => handleClick("2")}>2</button>
            <button class="botao" on:click={() => handleClick("3")}>3</button>
            <button class="botao" on:click={() => handleClick("+")}>+</button>
        </div>
        <div class="buttons">
            <button class="botao" on:click={() => handleClick("4")}>4</button>
            <button class="botao" on:click={() => handleClick("5")}>5</button>
            <button class="botao" on:click={() => handleClick("6")}>6</button>
            <button class="botao" on:click={() => handleClick("-")}>-</button>
        </div>
        <div class="buttons">
            <button class="botao" on:click={() => handleClick("7")}>7</button>
            <button class="botao" on:click={() => handleClick("8")}>8</button>
            <button class="botao" on:click={() => handleClick("9")}>9</button>
            <button class="botao" on:click={() => handleClick("*")}>*</button>
        </div>
        <div class="buttons">
            <button class="botao" on:click={() => handleClick("=")}>=</button>
            <button class="botao" on:click={() => handleClick("0")}>0</button>
            <button class="botao" on:click={() => handleClick("C")}>C</button>
            <button class="botao" on:click={() => handleClick("/")}>/</button>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        padding-top: 10vh;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin-top: 5px;
    }

    .botao {
        margin: 3px 3px 3px 3px;
        border-radius: 10px;
        width: 50px;
        height: 50px;
        font-size: 20px;
        color: white;
        background-color: blueviolet;
    }

    h1 {
        color: #223874;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    #visor {
        width: 220px;
        height: 40px;
        margin-bottom: 10px;
        text-align: right;
        font-size: 1.5rem;
        color: #223874;
        padding: 5px;
        border: 3px solid blueviolet;
        border-radius: 10px;
    }
</style>
