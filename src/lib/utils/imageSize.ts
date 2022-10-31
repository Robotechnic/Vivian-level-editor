export const imageResize = (
	image: HTMLImageElement,
	width: number,
	heigth: number
) => {
	const canvas = document.createElement("canvas")
	const ctx = canvas.getContext("2d")
	if (!ctx) throw new Error("Canvas context is not defined")
	canvas.width = width
	canvas.height = heigth
	ctx.imageSmoothingEnabled = true
	ctx.imageSmoothingQuality = "high"
	ctx.drawImage(image, 0, 0, width, heigth)
	const result: HTMLImageElement = new Image()
	result.src = canvas.toDataURL()
	result.alt = image.alt
	result.title = image.title

	return result
}
