(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{335:function(e,t,n){},494:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(71),a=n.n(o),r=(n(334),n(335),n(543)),i=n(107),s=n(310),l=n(4);function d(){return Object(l.jsx)(s.a,{inverted:!0,fixed:"top",children:Object(l.jsxs)(r.a,{children:[Object(l.jsxs)(s.a.Item,{header:!0,children:[Object(l.jsx)("img",{src:"/logo192.png",alt:"logo",style:{marginRight:10}}),"Mvp Reactivities"]}),Object(l.jsx)(s.a.Item,{as:i.b,to:"/customers",name:"Customers"}),Object(l.jsx)(s.a.Item,{as:i.b,to:"/products",name:"Products"}),Object(l.jsx)(s.a.Item,{as:i.b,to:"/stores",name:"Stores"}),Object(l.jsx)(s.a.Item,{as:i.b,to:"/sales",name:"Sales"})]})})}var j=n(20),u=n(18),O=n(41),b=n(16),f=n(102),h=n(546),x=n(46),m=n(77),p=n(548),C=n(544);function v(e){var t,n=null!==(t=e.selectedProduct)&&void 0!==t?t:{id:"",name:"",price:""},o=Object(c.useState)(n),a=Object(b.a)(o,2),r=a[0],i=a[1];function s(e){var t=e.target,n=t.name,c=t.value;i(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},n,c)))}return Object(l.jsxs)(p.a,{onClose:function(){return e.setOpenEditModal(!1)},onOpen:function(){return e.setOpenEditModal(!0)},open:e.openEditModal,children:[Object(l.jsx)(p.a.Header,{children:"Update Product Details"}),Object(l.jsx)(p.a.Content,{image:!0,children:Object(l.jsx)(p.a.Description,{children:Object(l.jsxs)(C.a,{onSubmit:function(){e.createOrEdit(r),e.setOpenEditModal(!1)},autoComplete:"off",children:[Object(l.jsx)(C.a.Input,{placeholder:"Name",value:r.name,name:"name",onChange:s}),Object(l.jsx)(C.a.Input,{placeholder:"Price",name:"price",type:"number",value:r.price,onChange:s}),Object(l.jsx)(f.a,{floated:"right",content:"Save",labelPosition:"right",icon:"checkmark",type:"submit",positive:!0}),Object(l.jsx)(f.a,{floated:"right",color:"black",onClick:function(){return e.setOpenEditModal(!1)},children:"Nope"})]})})}),Object(l.jsx)(p.a.Actions,{})]})}var S=n(139),g=n.n(S);g.a.defaults.baseURL="/api";var M=function(e){return e.data},k=function(e){return g.a.get(e).then(M)},D=function(e,t){return g.a.post(e,t).then(M)},E=function(e,t){return g.a.put(e,t).then(M)},y=function(e){return g.a.delete(e).then(M)},H={Customers:{list:function(){return k("/customer")},create:function(e){return D("/customer",e)},update:function(e){return E("/customer/".concat(e.id),e)},del:function(e){return y("/customer/".concat(e))}},Products:{list:function(){return k("/product")},create:function(e){return D("/product",e)},update:function(e){return E("/product/".concat(e.id),e)},del:function(e){return y("/product/".concat(e))}},Stores:{list:function(){return k("/store")},create:function(e){return D("/store",e)},update:function(e){return E("/store/".concat(e.id),e)},del:function(e){return y("/store/".concat(e))}},Sales:{list:function(){return k("/sales")},create:function(e){return D("/sales",e)},update:function(e){return E("/sales/".concat(e.id),e)},del:function(e){return y("/sales/".concat(e))}}},I=n(545);function A(e){return Object(l.jsxs)(p.a,{basic:!0,onClose:function(){return e.setOpenDeleteConfirmationModal(!1)},onOpen:function(){return e.setOpenDeleteConfirmationModal(!0)},open:e.openDeleteConfirmationModal,size:"small",children:[Object(l.jsxs)(I.a,{icon:!0,children:[Object(l.jsx)(x.a,{name:"archive"}),"Delete Confirmation"]}),Object(l.jsx)(p.a.Content,{children:Object(l.jsx)("p",{children:"Are you sure you want to delete this ?"})}),Object(l.jsxs)(p.a.Actions,{children:[Object(l.jsxs)(f.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return e.setOpenDeleteConfirmationModal(!1)},children:[Object(l.jsx)(x.a,{name:"remove"})," No"]}),Object(l.jsxs)(f.a,{color:"green",inverted:!0,onClick:function(){return e.deleteSales(e.selectedProduct.id)},children:[Object(l.jsx)(x.a,{name:"checkmark"})," Yes"]})]})]})}function P(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),r=Object(b.a)(a,2),i=r[0],s=r[1];function d(e){D(e?e.id:0),o(!0)}var j=Object(c.useState)([]),m=Object(b.a)(j,2),p=m[0],C=m[1],S=Object(c.useState)(void 0),g=Object(b.a)(S,2),M=g[0],k=g[1];function D(e){k(p.find((function(t){return t.id===e})))}return Object(c.useEffect)((function(){H.Products.list().then((function(e){C(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{positive:!0,content:"Create Product",onClick:function(){return d(void 0)}}),n&&Object(l.jsx)(v,{setOpenEditModal:o,openEditModal:n,selectedProduct:M,createOrEdit:function(e){e.id?H.Products.update(e).then((function(){C([].concat(Object(O.a)(p.filter((function(t){return t.id!==e.id}))),[e]))})):(e.id=0,H.Products.create(e).then((function(){C([].concat(Object(O.a)(p),[Object(u.a)(Object(u.a)({},e),{},{product:e})]))})))}}),i&&Object(l.jsx)(A,{setOpenDeleteConfirmationModal:s,openDeleteConfirmationModal:i,selectedProduct:M,deleteSales:function(e){H.Products.del(e).then((function(){s(!1),C(Object(O.a)(p.filter((function(t){return t.id!==e}))))}))}}),Object(l.jsxs)(h.a,{celled:!0,children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.HeaderCell,{children:"Name"}),Object(l.jsx)(h.a.HeaderCell,{children:"Price"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"})]})}),Object(l.jsx)(h.a.Body,{children:p.map((function(e){return Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.Cell,{children:e.name}),Object(l.jsx)(h.a.Cell,{children:e.price}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"yellow",onClick:function(){return d(e)},children:[Object(l.jsx)(x.a,{name:"edit"}),"Edit"]})}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"red",onClick:function(){return function(e){D(e?e.id:0),s(!0)}(e)},children:[Object(l.jsx)(x.a,{name:"trash"}),"Delete"]})})]},e.id)}))})]})]})}function w(e){var t,n=null!==(t=e.selectedCustomer)&&void 0!==t?t:{id:"",name:"",address:""},o=Object(c.useState)(n),a=Object(b.a)(o,2),r=a[0],i=a[1];function s(e){var t=e.target,n=t.name,c=t.value;i(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},n,c)))}return Object(l.jsxs)(p.a,{onClose:function(){return e.setOpenEditModal(!1)},onOpen:function(){return e.setOpenEditModal(!0)},open:e.openEditModal,children:[Object(l.jsx)(p.a.Header,{children:"Update Customer Details"}),Object(l.jsx)(p.a.Content,{image:!0,children:Object(l.jsx)(p.a.Description,{children:Object(l.jsxs)(C.a,{onSubmit:function(){e.createOrEdit(r),e.setOpenEditModal(!1)},autoComplete:"off",children:[Object(l.jsx)(C.a.Input,{placeholder:"Name",value:r.name,name:"name",onChange:s}),Object(l.jsx)(C.a.Input,{placeholder:"Address",name:"address",value:r.address,onChange:s}),Object(l.jsx)(f.a,{floated:"right",content:"Save",labelPosition:"right",icon:"checkmark",type:"submit",positive:!0}),Object(l.jsx)(f.a,{floated:"right",color:"black",onClick:function(){return e.setOpenEditModal(!1)},children:"Nope"})]})})}),Object(l.jsx)(p.a.Actions,{})]})}function N(e){return Object(l.jsxs)(p.a,{basic:!0,onClose:function(){return e.setOpenDeleteConfirmationModal(!1)},onOpen:function(){return e.setOpenDeleteConfirmationModal(!0)},open:e.openDeleteConfirmationModal,size:"small",children:[Object(l.jsxs)(I.a,{icon:!0,children:[Object(l.jsx)(x.a,{name:"archive"}),"Delete Confirmation"]}),Object(l.jsx)(p.a.Content,{children:Object(l.jsx)("p",{children:"Are you sure you want to delete this ?"})}),Object(l.jsxs)(p.a.Actions,{children:[Object(l.jsxs)(f.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return e.setOpenDeleteConfirmationModal(!1)},children:[Object(l.jsx)(x.a,{name:"remove"})," No"]}),Object(l.jsxs)(f.a,{color:"green",inverted:!0,onClick:function(){return e.deleteSales(e.selectedCustomer.id)},children:[Object(l.jsx)(x.a,{name:"checkmark"})," Yes"]})]})]})}function R(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),r=Object(b.a)(a,2),i=r[0],s=r[1];function d(e){k(e?e.id:0),o(!0)}var j=Object(c.useState)([]),m=Object(b.a)(j,2),p=m[0],C=m[1],v=Object(c.useState)(void 0),S=Object(b.a)(v,2),g=S[0],M=S[1];function k(e){M(p.find((function(t){return t.id===e})))}return Object(c.useEffect)((function(){H.Customers.list().then((function(e){C(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{positive:!0,content:"Create Customer",onClick:function(){return d(void 0)}}),n&&Object(l.jsx)(w,{setOpenEditModal:o,openEditModal:n,selectedCustomer:g,createOrEdit:function(e){e.id?H.Customers.update(e).then((function(){C([].concat(Object(O.a)(p.filter((function(t){return t.id!==e.id}))),[e]))})):(e.id=0,H.Customers.create(e).then((function(){C([].concat(Object(O.a)(p),[Object(u.a)(Object(u.a)({},e),{},{customer:e})]))})))}}),i&&Object(l.jsx)(N,{setOpenDeleteConfirmationModal:s,openDeleteConfirmationModal:i,selectedCustomer:g,deleteSales:function(e){H.Customers.del(e).then((function(){s(!1),C(Object(O.a)(p.filter((function(t){return t.id!==e}))))}))}}),Object(l.jsxs)(h.a,{celled:!0,children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.HeaderCell,{children:"Name"}),Object(l.jsx)(h.a.HeaderCell,{children:"Address"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"})]})}),Object(l.jsx)(h.a.Body,{children:p.map((function(e){return Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.Cell,{children:e.name}),Object(l.jsx)(h.a.Cell,{children:e.address}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"yellow",onClick:function(){return d(e)},children:[Object(l.jsx)(x.a,{name:"edit"}),"Edit"]})}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"red",onClick:function(){return function(e){k(e?e.id:0),s(!0)}(e)},children:[Object(l.jsx)(x.a,{name:"trash"}),"Delete"]})})]},e.id)}))})]})]})}function B(e){var t,n=null!==(t=e.selectedStore)&&void 0!==t?t:{id:"",name:"",address:""},o=Object(c.useState)(n),a=Object(b.a)(o,2),r=a[0],i=a[1];function s(e){var t=e.target,n=t.name,c=t.value;i(Object(u.a)(Object(u.a)({},r),{},Object(m.a)({},n,c)))}return Object(l.jsxs)(p.a,{onClose:function(){return e.setOpenEditModal(!1)},onOpen:function(){return e.setOpenEditModal(!0)},open:e.openEditModal,children:[Object(l.jsx)(p.a.Header,{children:"Update Store Details"}),Object(l.jsx)(p.a.Content,{image:!0,children:Object(l.jsx)(p.a.Description,{children:Object(l.jsxs)(C.a,{onSubmit:function(){e.createOrEdit(r),e.setOpenEditModal(!1)},autoComplete:"off",children:[Object(l.jsx)(C.a.Input,{placeholder:"Name",value:r.name,name:"name",onChange:s}),Object(l.jsx)(C.a.Input,{placeholder:"Address",name:"address",value:r.address,onChange:s}),Object(l.jsx)(f.a,{floated:"right",content:"Save",labelPosition:"right",icon:"checkmark",type:"submit",positive:!0}),Object(l.jsx)(f.a,{floated:"right",color:"black",onClick:function(){return e.setOpenEditModal(!1)},children:"Nope"})]})})}),Object(l.jsx)(p.a.Actions,{})]})}function F(e){return Object(l.jsxs)(p.a,{basic:!0,onClose:function(){return e.setOpenDeleteConfirmationModal(!1)},onOpen:function(){return e.setOpenDeleteConfirmationModal(!0)},open:e.openDeleteConfirmationModal,size:"small",children:[Object(l.jsxs)(I.a,{icon:!0,children:[Object(l.jsx)(x.a,{name:"archive"}),"Delete Confirmation"]}),Object(l.jsx)(p.a.Content,{children:Object(l.jsx)("p",{children:"Are you sure you want to delete this ?"})}),Object(l.jsxs)(p.a.Actions,{children:[Object(l.jsxs)(f.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return e.setOpenDeleteConfirmationModal(!1)},children:[Object(l.jsx)(x.a,{name:"remove"})," No"]}),Object(l.jsxs)(f.a,{color:"green",inverted:!0,onClick:function(){return e.deleteSales(e.selectedStore.id)},children:[Object(l.jsx)(x.a,{name:"checkmark"})," Yes"]})]})]})}function Y(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),r=Object(b.a)(a,2),i=r[0],s=r[1];function d(e){k(e?e.id:0),o(!0)}var j=Object(c.useState)([]),m=Object(b.a)(j,2),p=m[0],C=m[1],v=Object(c.useState)(void 0),S=Object(b.a)(v,2),g=S[0],M=S[1];function k(e){M(p.find((function(t){return t.id===e})))}return Object(c.useEffect)((function(){H.Stores.list().then((function(e){C(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{positive:!0,content:"Create Store",onClick:function(){return d(void 0)}}),n&&Object(l.jsx)(B,{setOpenEditModal:o,openEditModal:n,selectedStore:g,createOrEdit:function(e){e.id?H.Stores.update(e).then((function(){C([].concat(Object(O.a)(p.filter((function(t){return t.id!==e.id}))),[e]))})):(e.id=0,H.Stores.create(e).then((function(){C([].concat(Object(O.a)(p),[Object(u.a)(Object(u.a)({},e),{},{store:e})]))})))}}),i&&Object(l.jsx)(F,{setOpenDeleteConfirmationModal:s,openDeleteConfirmationModal:i,selectedStore:g,deleteSales:function(e){H.Stores.del(e).then((function(){s(!1),C(Object(O.a)(p.filter((function(t){return t.id!==e}))))}))}}),Object(l.jsxs)(h.a,{celled:!0,children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.HeaderCell,{children:"Name"}),Object(l.jsx)(h.a.HeaderCell,{children:"Address"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"}),Object(l.jsx)(h.a.HeaderCell,{children:"Actions"})]})}),Object(l.jsx)(h.a.Body,{children:p.map((function(e){return Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.Cell,{children:e.name}),Object(l.jsx)(h.a.Cell,{children:e.address}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"yellow",onClick:function(){return d(e)},children:[Object(l.jsx)(x.a,{name:"edit"}),"Edit"]})}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"red",onClick:function(){return function(e){k(e?e.id:0),s(!0)}(e)},children:[Object(l.jsx)(x.a,{name:"trash"}),"Delete"]})})]},e.id)}))})]})]})}var U=n(499),z=n(313);function L(e){var t,n=null!==(t=e.selectedSales)&&void 0!==t?t:{storeId:"",customerId:"",productId:"",dateSold:""},o=Object(c.useState)(n),a=Object(b.a)(o,2),r=a[0],i=a[1],s=Object(c.useState)([]),d=Object(b.a)(s,2),j=d[0],O=d[1],h=Object(c.useState)([]),x=Object(b.a)(h,2),m=x[0],v=x[1],S=Object(c.useState)([]),g=Object(b.a)(S,2),M=g[0],k=g[1];return Object(c.useEffect)((function(){H.Products.list().then((function(e){var t=e.map((function(e){var t={};return t.key=e.id,t.value=e.id,t.text=e.name,t}));O(t)})),H.Stores.list().then((function(e){var t=e.map((function(e){var t={};return t.key=e.id,t.value=e.id,t.text=e.name,t}));v(t)})),H.Customers.list().then((function(e){var t=e.map((function(e){var t={};return t.key=e.id,t.value=e.id,t.text=e.name,t}));k(t)}))}),[]),Object(l.jsxs)(p.a,{onClose:function(){return e.setOpenEditModal(!1)},onOpen:function(){return e.setOpenEditModal(!0)},open:e.openEditModal,children:[Object(l.jsx)(p.a.Header,{children:"Update Sales Details"}),Object(l.jsx)(p.a.Content,{image:!0,children:Object(l.jsxs)(p.a.Description,{children:[Object(l.jsx)(z.DateInput,{name:"date",placeholder:"Date",value:r.dateSold,iconPosition:"left",onChange:function(e,t){t.name;var n=t.value;i(Object(u.a)(Object(u.a)({},r),{},{dateSold:n}))},dateFormat:"YYYY-MM-DD",style:{display:"block",marginBottom:"10px"}}),Object(l.jsxs)(C.a,{onSubmit:function(){console.log(r),e.createOrEdit(r),e.setOpenEditModal(!1)},autoComplete:"off",children:[Object(l.jsx)(U.a,{placeholder:"Customers",onChange:function(e,t){var n=t.value;console.log(n),i(Object(u.a)(Object(u.a)({},r),{},{customerId:n}))},options:M,id:"customerId",value:r.customerId,style:{display:"block",marginBottom:"10px"}}),Object(l.jsx)(U.a,{placeholder:"Products",onChange:function(e,t){var n=t.value;console.log(n),i(Object(u.a)(Object(u.a)({},r),{},{productId:n}))},options:j,name:"productId",value:r.productId,style:{display:"block",marginBottom:"10px"}}),Object(l.jsx)(U.a,{placeholder:"Stores",onChange:function(e,t){var n=t.value;console.log(n),i(Object(u.a)(Object(u.a)({},r),{},{storeId:n}))},options:m,name:"storeId",value:r.storeId,style:{display:"block",marginBottom:"10px"}}),Object(l.jsx)(f.a,{floated:"right",content:"Save",labelPosition:"right",icon:"checkmark",type:"submit",positive:!0}),Object(l.jsx)(f.a,{floated:"right",color:"black",onClick:function(){return e.setOpenEditModal(!1)},children:"Nope"})]})]})}),Object(l.jsx)(p.a.Actions,{})]})}function T(e){return Object(l.jsxs)(p.a,{basic:!0,onClose:function(){return e.setOpenDeleteConfirmationModal(!1)},onOpen:function(){return e.setOpenDeleteConfirmationModal(!0)},open:e.openDeleteConfirmationModal,size:"small",children:[Object(l.jsxs)(I.a,{icon:!0,children:[Object(l.jsx)(x.a,{name:"archive"}),"Delete Confirmation"]}),Object(l.jsx)(p.a.Content,{children:Object(l.jsx)("p",{children:"Are you sure you want to delete this ?"})}),Object(l.jsxs)(p.a.Actions,{children:[Object(l.jsxs)(f.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return e.setOpenDeleteConfirmationModal(!1)},children:[Object(l.jsx)(x.a,{name:"remove"})," No"]}),Object(l.jsxs)(f.a,{color:"green",inverted:!0,onClick:function(){return e.deleteSales(e.selectedSales.id)},children:[Object(l.jsx)(x.a,{name:"checkmark"})," Yes"]})]})]})}function J(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),r=Object(b.a)(a,2),i=r[0],s=r[1];function d(e){M(e?e.id:0),o(!0)}var j=Object(c.useState)([]),u=Object(b.a)(j,2),m=u[0],p=u[1],C=Object(c.useState)(void 0),v=Object(b.a)(C,2),S=v[0],g=v[1];function M(e){g(m.find((function(t){return t.id===e})))}return Object(c.useEffect)((function(){H.Sales.list().then((function(e){p(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{positive:!0,content:"Create Sales",onClick:function(){return d(void 0)}}),n&&Object(l.jsx)(L,{setOpenEditModal:o,openEditModal:n,selectedSales:S,createOrEdit:function(e){console.log(e),e.id?H.Sales.update(e).then((function(){H.Sales.list().then((function(e){p(e)}))})):(e.id=0,H.Sales.create(e).then((function(){H.Sales.list().then((function(e){p(e)}))})))}}),i&&Object(l.jsx)(T,{setOpenDeleteConfirmationModal:s,openDeleteConfirmationModal:i,selectedSales:S,deleteSales:function(e){H.Sales.del(e).then((function(){s(!1),p(Object(O.a)(m.filter((function(t){return t.id!==e}))))}))}}),Object(l.jsxs)(h.a,{celled:!0,children:[Object(l.jsx)(h.a.Header,{children:Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.HeaderCell,{children:"Customer"}),Object(l.jsx)(h.a.HeaderCell,{children:"Product"}),Object(l.jsx)(h.a.HeaderCell,{children:"Store"}),Object(l.jsx)(h.a.HeaderCell,{children:"Date Sold"}),Object(l.jsx)(h.a.HeaderCell,{children:"Action"}),Object(l.jsx)(h.a.HeaderCell,{children:"Action"})]})}),Object(l.jsx)(h.a.Body,{children:m&&m.map((function(e){return Object(l.jsxs)(h.a.Row,{children:[Object(l.jsx)(h.a.Cell,{children:e.customer.name}),Object(l.jsx)(h.a.Cell,{children:e.product.name}),Object(l.jsx)(h.a.Cell,{children:e.store.name}),Object(l.jsx)(h.a.Cell,{children:e.dateSold}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"yellow",onClick:function(){return d(e)},children:[Object(l.jsx)(x.a,{name:"edit"}),"Edit"]})}),Object(l.jsx)(h.a.Cell,{children:Object(l.jsxs)(f.a,{color:"red",onClick:function(){return function(e){M(e?e.id:0),s(!0)}(e)},children:[Object(l.jsx)(x.a,{name:"trash"}),"Delete"]})})]},e.id)}))})]})]})}var q=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.a,{style:{marginTop:"7em"},children:[Object(l.jsx)(j.a,{path:"/customers",component:R}),Object(l.jsx)(j.a,{path:"/products",component:P}),Object(l.jsx)(j.a,{path:"/stores",component:Y}),Object(l.jsx)(j.a,{path:"/sales",component:J})]})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,549)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(q,{})}),document.getElementById("root")),G()}},[[494,1,2]]]);
//# sourceMappingURL=main.aeb9e711.chunk.js.map