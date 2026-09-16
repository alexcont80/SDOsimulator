import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import React from 'react';

test('real search component shows the imported catalog and distinct diagnostic/procedure results',async()=>{
 const dom=new JSDOM('<!doctype html><html><body></body></html>',{url:'http://localhost/'});
 Object.assign(globalThis,{window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,MutationObserver:dom.window.MutationObserver,IS_REACT_ACT_ENVIRONMENT:true});
 Object.defineProperty(globalThis,'navigator',{configurable:true,value:dom.window.navigator});
 const {render,fireEvent,waitFor,cleanup}=await import('@testing-library/react');
 const {CodeSearchModal}=await import('../src/components/CodeSearchModal');
 try {
  const view=render(<CodeSearchModal isOpen onClose={()=>{}} />);
  fireEvent.change(view.getByLabelText('Data di riferimento catalogo'),{target:{value:'2026-09-16'}});
  const input=view.container.querySelector('#catalog-search-input')!;
  const rows=()=>view.container.querySelectorAll('[id^="search-result-"]');
  await waitFor(()=>assert.equal(rows().length,50));
  fireEvent.change(input,{target:{value:'colecistite'}});
  await waitFor(()=>assert.equal(rows().length,10));
  assert.ok(view.container.textContent?.includes('Colecistite acuta'));
  fireEvent.click(view.getByText('Solo codici terminali'));
  await waitFor(()=>assert.equal(rows().length,9));
  fireEvent.click(view.container.querySelector('#filter-cipi-btn')!);
  await waitFor(()=>assert.equal(rows().length,0));
  fireEvent.change(input,{target:{value:'colecistectomia'}});
  await waitFor(()=>assert.ok(rows().length>1));
  fireEvent.click(view.container.querySelector('#filter-icd10-btn')!);
  fireEvent.click(view.getByText('Solo codici terminali'));
  fireEvent.change(input,{target:{value:'K81'}});
  await waitFor(()=>assert.equal(rows().length,5));
 } finally {cleanup();dom.window.close();}
});
