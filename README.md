# Installation
 
> First, run `npm install --save @cw-types/mssql`


>Then, you must add `node_modules/@cw-types` to your `tsconifg.json` file, like so:
```javascript
    "typeRoots": [
      "node_modules/@cw-types",
      "node_modules/@types"
    ]
```
> This will enable the Typescript compiler to find and use this typing since it is not installed under `node_modules/@types`.

> Please note the order is important of the entries in `typeRoots`.  If you want `node_modules/@types` to resolve first then move it up top. 

# Summary
 Typescript typings for `mssql` `3.0` that support bluebird.

 This package contains type definitions for [mssql](https://github.com/patriksimek/node-mssql).


# Credits
Starting definitions were written by COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>, Vitor Buzinaro <https://github.com/buzinas>, Matt Richardson <https://github.com/mrrichar/>, Jørgen Elgaard Larsen <https://github.com/elhaard/>, Peter Keuter <https://github.com/pkeuter/>.

# Maintainers
This project is mainted by [Kavan J. Shaban](https://github.com/kavanshaban) at [Cycloware](https://github.com/cycloware) 
