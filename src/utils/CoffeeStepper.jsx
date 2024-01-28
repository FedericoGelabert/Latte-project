

const CoffeeStepper = () => {

    return (
        <div class="w-full px-12 py-4">
            <div class="relative flex items-center justify-between w-full">
                <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
                <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-400 transition-all duration-500">
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M23.047,17.197l-4.318,3.935c-2.031,1.85-4.662,2.868-7.408,2.868H1c-.553,0-1-.447-1-1s.447-1,1-1H11.32c2.247,0,4.399-.833,6.061-2.347l4.284-3.902c.347-.348,.43-.944,.156-1.324-.18-.249-.442-.399-.74-.424-.291-.019-.58,.082-.788,.29l-4.234,3.886c-.538,.508-1.262,.821-2.059,.821h-5c-.553,0-1-.447-1-1s.447-1,1-1h5c.252,0,1-.115,1-1,0-.552-.448-1-1-1h-4.912c-2.403,0-4.664,.937-6.364,2.636l-.998,1.053c-.197,.207-.461,.312-.726,.312-.247,0-.495-.091-.688-.274-.4-.381-.417-1.014-.037-1.414l1.017-1.071c2.097-2.096,4.859-3.24,7.797-3.24h4.912c1.236,0,2.3,.752,2.759,1.822l2.151-1.974c.591-.593,1.456-.915,2.331-.839,.88,.07,1.683,.525,2.203,1.248,.844,1.174,.673,2.866-.397,3.939ZM4.006,2.162c-.042-.581,.172-1.153,.588-1.568C5.009,.178,5.581-.04,6.163,.006c2.877,.203,4.785,1.195,5.837,3.112C13.053,1.201,14.96,.209,17.838,.006c.591-.048,1.154,.172,1.568,.588,.416,.415,.63,.987,.588,1.569-.311,4.413-2.48,6.545-6.994,6.808v1.028c0,.553-.447,1-1,1s-1-.447-1-1v-1.028c-4.514-.264-6.683-2.395-6.994-6.809ZM13.032,6.968c3.361-.224,4.734-1.637,4.968-4.946-3.329,.214-4.744,1.585-4.968,4.946ZM6.021,2c.214,3.329,1.585,4.744,4.946,4.968-.224-3.361-1.637-4.734-4.946-4.968Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step  1
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Sowing
                        </p>
                    </div>
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="m16.437,23.902c-2.553-.881-4.437-3.865-4.437-7.402,0-3.896,2.286-7.12,5.234-7.602.243.346,1.905,2.965-.134,7.166-1.722,3.549-1.26,6.278-.663,7.838Zm3.126-14.803c.597,1.56,1.059,4.289-.663,7.838-2.039,4.201-.377,6.82-.134,7.166,2.948-.482,5.234-3.706,5.234-7.602,0-3.537-1.884-6.52-4.437-7.402Zm-12.235-1.153c-4.249,1.471-5.141,4.292-5.303,5.015.907.681,2.031,1.042,3.278,1.042.323,0,.654-.024.991-.072,1.799-.257,3.58-1.188,5.014-2.623,2.528-2.528,3.317-6.001,2.142-8.464-.723,1.561-2.378,3.806-6.121,5.103Zm-.655-1.891c4.253-1.473,5.143-4.298,5.304-5.017C10.834.18,9.343-.163,7.707.07c-1.799.257-3.58,1.188-5.014,2.623C.164,5.222-.625,8.694.552,11.158c.723-1.561,2.378-3.806,6.121-5.103Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step 2
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Harvest
                        </p>
                    </div>
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M10.37,10.67l1.95,1.12,1.5-2.6-1.94-1.12c.08-.35,.12-.71,.12-1.08s-.05-.73-.12-1.08l1.94-1.12-1.5-2.6-1.95,1.12c-.53-.49-1.17-.85-1.87-1.07V0h-3V2.26c-.7,.22-1.34,.59-1.87,1.07l-1.95-1.12L.19,4.81l1.94,1.12c-.08,.35-.12,.71-.12,1.08s.05,.73,.12,1.08L.19,9.19l1.5,2.6,1.95-1.12c.53,.49,1.17,.85,1.87,1.07v2.26h3v-2.26c.7-.22,1.34-.59,1.87-1.07Zm-3.37-5.67c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm15,12c0-.37-.05-.73-.12-1.08l1.94-1.12-1.5-2.6-1.95,1.12c-.53-.49-1.17-.85-1.87-1.07v-2.26h-3v2.26c-.7,.22-1.34,.59-1.87,1.07l-1.95-1.12-1.5,2.6,1.94,1.12c-.08,.35-.12,.71-.12,1.08s.05,.73,.12,1.08l-1.94,1.12,1.5,2.6,1.95-1.12c.53,.49,1.17,.85,1.87,1.07v2.26h3v-2.26c.7-.22,1.34-.59,1.87-1.07l1.95,1.12,1.5-2.6-1.94-1.12c.08-.35,.12-.71,.12-1.08Zm-5,2c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step 3
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Benefit
                        </p>
                    </div>
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="m6,20c0,.486-.349.937-.795,1.029-.687.137-1.205.743-1.205,1.471,0,.828.672,1.5,1.5,1.5h13c.828,0,1.5-.672,1.5-1.5,0-.727-.518-1.334-1.205-1.471-.446-.092-.795-.543-.795-1.029,0-.513.826-.927.862-.952,1.832-1.287,4.19-3.489,5.022-6.668.276-1.059.052-2.163-.617-3.029s-1.68-1.364-2.774-1.364h-1.729s4.504-3.719,4.504-3.719c.976-.976.976-2.559,0-3.536s-2.559-.976-3.536,0l-5.997,7.26-10.235.008c-1.094,0-2.104.497-2.773,1.364s-.894,1.971-.617,3.029c.827,3.162,3.191,5.364,5.028,6.655.036.025.862.414.862.952m14.982-8.38c-.466,1.781-1.812,3.533-3.796,4.938-1.266.752-1.816,1.673-2.041,2.441h-6.29c-.226-.768-.775-1.689-2.041-2.441-1.419-1.006-3.211-2.668-3.802-4.925-.055-.208.033-.363.09-.437.057-.073.184-.197.399-.197l16.993-.013c.215,0,.342.124.398.197.057.074.145.229.09.437Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step 4
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Roast & Ground
                        </p>
                    </div>
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1V22Zm-14-4h12v2H8v-2ZM18.292,7.535l3.164,3.164-1.414,1.414-2.041-2.041v5.928h-2v-5.928l-2,2-2-2v5.928h-2v-5.928l-2.092,2.092-1.414-1.414,3.215-3.215c.712-.712,1.871-.712,2.583,0l1.708,1.708,1.708-1.708c.712-.712,1.871-.712,2.583,0Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step 5
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Packing
                        </p>
                    </div>
                </div>
                <div
                    class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M11.026,4h-2V0h2Zm4-4h-2V4h2ZM0,24H20V22H0ZM23.993,13.143A3.981,3.981,0,0,1,20,17H16.845a22.085,22.085,0,0,1-2.431,3H5.59A21.943,21.943,0,0,1,.033,9.4,2.844,2.844,0,0,1,.674,7.087,3.047,3.047,0,0,1,3.007,6h0L17,6A3.05,3.05,0,0,1,19.328,7.09,2.84,2.84,0,0,1,19.97,9.4c-.035.2-.081.4-.123.6H20C22.462,10,23.993,11.205,23.993,13.143ZM17.8,8.38A1.061,1.061,0,0,0,17,8L3.008,8h0a1.065,1.065,0,0,0-.8.376.841.841,0,0,0-.2.685A19.193,19.193,0,0,0,6.44,18h7.124A19.181,19.181,0,0,0,18,9.064.841.841,0,0,0,17.8,8.38Zm4.2,4.763c0-.758-.672-1.143-2-1.143h-.687a20.161,20.161,0,0,1-1.279,3H20A1.982,1.982,0,0,0,21.994,13.143ZM7.026,0h-2V4h2Z" />
                    </svg>
                    <div class="absolute -bottom-[4.5rem] w-max text-center">
                        <h6
                            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                            Step 6
                        </h6>
                        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                            Preparation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeStepper;