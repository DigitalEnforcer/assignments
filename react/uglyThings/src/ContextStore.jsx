import React from "react";

const ContextStore = React.createContext()

function ContextStoreProvider(props){
    const [uglyThings, setUglyThings] = React.useState(["Happy"])

    return (
        <ContextStore.Provider >
            <div>{props.children}</div>
        </ContextStore.Provider>
    )
}

export {ContextStore, ContextStoreProvider}