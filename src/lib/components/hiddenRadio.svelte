
<li>
	<input type="radio">
	<label>
		<slot></slot>
	</label>
</li>

<style lang="scss">
	input {
		position: absolute;
		top: -100%;

		&:focus {
			+ label {
				// outline with firefox style
				outline: 2px solid #1a73e8;
			}
		}
	}
</style>