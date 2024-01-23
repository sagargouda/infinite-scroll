1. putting all my learnings here
2. used loading.io
3. make it transperent and download it as svg
4. i have used position as fixed for loading svg because fiexd positionm is relative to viewport which means it stays in same place even when page is scrolled. for an element, it is taken out of the normal document flow and is positioned relative to the viewport. This means that it essentially becomes an overlay on top of the rest of the content in the viewport.

5. fixed postion can give us overlay effect

6. we can use hidden keyword to hide something

7. .image-container {
   margin: 10px 30%;
   }

.image-container img {
width: 100%;
margin-top: 5px;
}
trick here is left and right takes up 60% when in image if is say take 100% width it will be cenetered obvisouly

8. infinite scroll implementation
   we use scroll event

9. window is parent of documnet and grand parent of body so

10. window.innerHeight = total height of browser window , window.scrollY = this is the distance from top to where he is now

11. we will subtract this by document.body.offsetHeight which height of everrything in the body including what is not within our view

12. we use on load
