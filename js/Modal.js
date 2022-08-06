// ? JuanCruzAGB | Source repository
import Class, { URL, } from '@juancruzagb/src';

// ? Modal repository
import { Button, } from "@juancruzagb/sidebar";

/**
 * * Modal makes an excellent modal.
 * @export
 * @class Modal
 * @extends {Class}
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export default class Modal extends Class {
    /**
     * * Creates an instance of Modal.
     * @memberof Modal
     */
    constructor (data = {
        callbacks: {
            close: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
            open: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
        },
        props: {
            id: "modal-1",
        },
        state: {
            open: false,
        },
    }) {
        super({
            callbacks: {
                ...Modal.callbacks(),
                ...(data && data.hasOwnProperty('callbacks')) ? data.callbacks : {},
            },
            props: {
                ...Modal.props(),
                ...(data && data.hasOwnProperty('props')) ? data.props : {},
            },
            state: {
                ...Modal.state(),
                ...(data && data.hasOwnProperty('state')) ? data.state : {},
            },
        });

        this.html = document.querySelector(`#${ this.props.id }.modal`);
        this.html.addEventListener('click', event => {
            if (event.target != event.currentTarget) return;

            window.history.pushState({}, document.title, URL.findOriginalRoute());
            this.close();
        });

        this.buttons = new Button;
        this.buttons.add(document.querySelectorAll(`.${ this.props.id }.button`), this);

        if (this.state.open) this.open();

        URL.watchHash(this.props.id, {
            close: {
                function: this.close(),
            },
            open: {
                function: this.open(),
            },
        });
    }

    /**
     * * Close the Modal.
     * @param {object} [params]
     * @memberof Modal
     */
    close (params = {}) {
        this.setState("open", false);
        this.html.classList.remove("opened");

        if (this.callbacks.has("close")) {
            this.callbacks.execute("switch", {
                ...params,
                open: this.state.open,
                Modal: this,
            });
        }
    }

    /**
     * * Open the Modal.
     * @param {object} [params]
     * @memberof Modal
     */
    open (params = {}) {
        this.setState("open", true);
        this.html.classList.add("opened");

        if (this.callbacks.has("open")) {
            this.callbacks.execute("switch", {
                ...params,
                open: this.state.open,
                Modal: this,
            });
        }
    }

    /**
     * * Switch the Modal open state.
     * @param {object} [params]
     * @returns {boolean}
     * @memberof Modal
     */
    switch (params = {}) {
        switch (this.state.open) {
            case true:
                this.close();
                break;

            case false:
                this.open();
                break;
        }

        if (this.callbacks.has("switch")) {
            this.callbacks.execute("switch", {
                ...params,
                open: this.state.open,
                Modal: this,
            });
        }

        return this.state.open;
    }

    /** 
     * * Returns default callbacks.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static callbacks () {
        return {
            // 
        };
    }

    /** 
     * * Returns default properties.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static props () {
        return {
            id: "modal-1",
        };
    }
    
    /** 
     * * Returns default state.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static state () {
        return {
            open: false,
        };
    }
}