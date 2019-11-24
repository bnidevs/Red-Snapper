<template>
	<div class="sidebar-sticky">
	<ul class="nav flex-column">

		<table class="ml-4">

			<li class="nav-item d-flex flex-row">
				<span data-feather="color_placement"></span>
				<tr>
					<td>
						Background
					</td>
					<td>
						<input type="color" id="bg_clr_view" value="#ffffff">
					</td>
				</tr>
			</li>

			<li class="nav-item d-flex flex-row">
				<span data-feather="color_placement"></span>
				<tr>
					<td>
						Text
					</td>
					<td>
						<input type="color" id="bg_clr_view" value="#000000">
					</td>
				</tr>
			</li>

		</table>

	</ul>
</div>
</template>

<script>
export default {
    name: 'sidebar_contents_style'
}
</script>