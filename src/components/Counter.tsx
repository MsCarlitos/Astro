import type { JSX } from "astro/jsx-runtime";
import { createSignal, type Component, type JSXElement } from "solid-js";
interface Props {
    initValue: number;
    children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
    const [counter, setCounter] = createSignal(props.initValue);
    return (
        <>
            {props.children}
            {/* <h1 class="text-4lx">Counter</h1> */}
            <h3 class="text-xl">Value: { counter() }</h3>

            <button onClick={() => setCounter( prev => ++prev)} class="bg-blue-500 p-2 mr-2 rounder">+1</button>
            <button onClick={() => setCounter( prev => --prev)} class="bg-blue-500 p-2 mr-2 rounder">-1</button>
        </>
    );
};