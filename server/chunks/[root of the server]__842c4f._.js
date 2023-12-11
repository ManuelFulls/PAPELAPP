module.exports = {

"[project]/src/lib/mysql.ts [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DB": ()=>DB
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mysql2$40$3$2e$6$2e$5$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mysql2@3.6.5/node_modules/mysql2/promise.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const connection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mysql2$40$3$2e$6$2e$5$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createConnection"]({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});
class ConnectionPool {
    static async query(sql, values) {
        const x = await connection;
        const [rows] = await x.execute(sql, values);
        return rows;
    }
}
class DB {
    static async getProducts() {
        const QUERY = `SELECT * FROM Producto`;
        const products = await ConnectionPool.query(QUERY);
        return products;
    }
    static async insertProduct({ nombre, color, costo, categoria, marca, cantidad, url_imagen }) {
        try {
            const QUERY = `INSERT INTO Producto (nombre, color, costo, categoria, marca, cantidad, url_imagen) values (?,?,?,?,?,?,?)`;
            await ConnectionPool.query(QUERY, [
                nombre,
                color,
                costo,
                categoria,
                marca,
                cantidad,
                url_imagen
            ]);
            return true;
        } catch (error) {
            return false;
        }
    }
    static async getProductById(id) {
        const QUERY = `SELECT * FROM producto where id_producto=?`;
        const productos = await ConnectionPool.query(QUERY, [
            id
        ]);
        return productos[0];
    }
    static async updateProduct({ id_producto, nombre, color, costo, categoria, marca, cantidad, url_imagen }) {
        try {
            const QUERY = `UPDATE Producto 
      SET nombre = ?, color = ?, costo = ?, categoria = ?, marca = ?, cantidad = ?, url_imagen = ?
      WHERE id_producto = ?`;
            await ConnectionPool.query(QUERY, [
                nombre,
                color,
                costo,
                categoria,
                marca,
                cantidad,
                url_imagen,
                id_producto
            ]);
            return true;
        } catch (error) {
            return false;
        }
    }
    static async insertUser({ nombre, correo, contraseña }) {
        try {
            const QUERY = `INSERT INTO Usuario (nombre, correo, contraseña) values (?,?,?)`;
            await ConnectionPool.query(QUERY, [
                nombre,
                correo,
                contraseña
            ]);
            return true;
        } catch (error) {
            return false;
        }
    }
}

})()),
"[project]/src/app/nuevo-producto/page.module.css [rsc] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "Info1": "Info1__page__dc6ce755",
  "Info2": "Info2__page__dc6ce755",
  "bto": "bto__page__dc6ce755",
  "cajaInfo": "cajaInfo__page__dc6ce755",
  "cajaInput": "cajaInput__page__dc6ce755",
  "color": "color__page__dc6ce755",
  "colorInput": "colorInput__page__dc6ce755",
  "contenedor": "contenedor__page__dc6ce755",
  "contenedor2": "contenedor2__page__dc6ce755",
  "orden": "orden__page__dc6ce755",
  "textIm": "textIm__page__dc6ce755",
  "titulo": "titulo__page__dc6ce755",
});

})()),
"[project]/src/app/nuevo-producto/page.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"eef261aa2c14f53baa821ab1041328c5ab3d1535":"$$ACTION_0"} */ __turbopack_esm__({
    "$$ACTION_0": ()=>$$ACTION_0,
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$encryption$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/app-render/action-encryption.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/nuevo-producto/page.module.css [rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mysql$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/mysql.ts [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function Home() {
    // prettier-ignore
    async function procesarForm(...args) {
        return $$ACTION_0.apply(null, (procesarForm.$$bound || []).concat(args));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$proxy$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["createActionProxy"]("eef261aa2c14f53baa821ab1041328c5ab3d1535", null, procesarForm, $$ACTION_0);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].titulo,
                children: "Nuevo Producto"
            }, void 0, false, {
                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].contendeorM,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: "/Papeleria.jpg",
                    alt: ""
                }, void 0, false, {
                    fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                action: procesarForm,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].contenedor,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].textIm,
                        children: "Imagen"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "text",
                        name: "url_img"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "Nombre"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "text",
                        name: "nombre"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].contenedor2,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].cajaInfo,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].Info1,
                                        children: "Categoria"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].Info2,
                                        children: "Marca"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].cajaInput,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "text",
                                        name: "categoria"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "text",
                                        name: "marca"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].contenedor2,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].cajaInfo,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].Info1,
                                        children: "Precio"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].Info2,
                                        children: "Cantidad"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].cajaInput,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "number",
                                        name: "precio"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "number",
                                        name: "cantidad"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].color,
                        children: "Color"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "text",
                        name: "color",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].colorInput
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].orden,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$nuevo$2d$producto$2f$page$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].bto,
                            children: "Agregar Producto"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/nuevo-producto/page.tsx>",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
async function $$ACTION_0(data) {
    const producto = {
        nombre: data.get("nombre"),
        categoria: data.get("categoria"),
        marca: data.get("marca"),
        costo: parseInt(data.get("precio")),
        cantidad: parseInt(data.get("cantidad")),
        color: data.get("color"),
        url_imagen: data.get("url_img")
    };
    const resultado = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mysql$2e$ts__$5b$rsc$5d$__$28$ecmascript$29$__["DB"].insertProduct(producto);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["redirect"]("/");
}

})()),
"[node]/.next/server/app/nuevo-producto/page/actions.js/(ACTIONS_MODULE0)/[project]/src/app/nuevo-producto/page.tsx [rsc] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({
    'eef261aa2c14f53baa821ab1041328c5ab3d1535': (...args)=>(0, __turbopack_require__("[project]/src/app/nuevo-producto/page.tsx [rsc] (ecmascript)")['$$ACTION_0'])(...args)
});

}.call(this) }),
"[next]/internal/font/google/inter_59dee874.module.css [rsc] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "className__inter_59dee874__bbf899b6",
});

})()),
"[next]/internal/font/google/inter_59dee874.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/inter_59dee874.module.css [rsc] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Inter_59dee8', '__Inter_Fallback_59dee8'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/src/app/layout.tsx [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_59dee874.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "en",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["jsxDEV"]("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["default"].className,
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/app/layout.tsx>",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/layout.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/layout.tsx [rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/layout.tsx [rsc] (ecmascript)"),
});

})()),
"[project]/src/app/nuevo-producto/page.tsx [rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/nuevo-producto/page.tsx [rsc] (ecmascript)"),
});

})()),

};

//# sourceMappingURL=[root of the server]__842c4f._.js.map