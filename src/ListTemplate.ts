import React from "react"

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(tit: string, item: string, heading: string, pos: "start" | "end"){
        const li = document.createElement("li")

        const h1 = document.createElement("h1")
        h1.innerText = tit
        li.append(h1) 

        const h4 = document.createElement("h4")
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement("p")
        p.innerText = item
        li.append(p)

        if (pos === "start") {
        this.container.prepend(li) 
        } else {
            this.container.append(li)
        }
    }
}