'use client'
import React, { useState } from 'react';

function Email() {
    const [tooltipText, setTooltipText] = useState('Click here to send me an email');
    const [copied, setCopied] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    function copyToClipboard(text:any) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('Click here to send me an email');
        document.body.removeChild(el);
        setCopied(true);
        setTooltipText('Click here to send me an email');
        setTooltipVisible(true);
    }

    function resetTooltipText() {
        if (copied) {
        setTooltipText('Click here to send me an email');
        setCopied(false);
        setTooltipVisible(false);
        }
    }
  return (
    <a
        className="xl:ml-20 lg:ml-20 ml-6 mt-6 w-80 3xl:w-7/12 bg-slate-800 py-2 px-4 rounded relative grid justify-items-start"
        onClick={() => copyToClipboard('casper.van.damme@outlook.com')}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        href="mailto:caspervandamme03@gmail.com"
    >
        <h4 className="text-slate-600 3xl:text-xl 3xl:mb-1">My e-mail address</h4>
        <h3 className="text-sky-500 font-bold text-lg 3xl:text-2xl 3xl:mb-1">caspervandamme03@gmail.com</h3>
        <span
            className={`opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 px-3 absolute bottom-7 left-1/2 transform -translate-x-1/2 pointer-events-none z-50 transition-opacity duration-150 ${tooltipVisible ? 'opacity-100' : ''}`}
        >
            {tooltipText}
            <svg
                className="absolute text-black h-2 w-full left-0 top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
            >
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
        </span>
    </a>
  );
}

export default Email;