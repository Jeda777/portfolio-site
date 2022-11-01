<script>
	import logo from '../assets/logo.png';
	import menu from '../assets/menu.svg';
	import close from '../assets/close.svg';

	let open = false;

	const handleMenuButton = () => {
		open ? (open = false) : (open = true);
	};
</script>

<header>
	<div class="header-left">
		<img src={logo} alt="" />
		<a href="/">Jakub Jęda</a>
	</div>
	<div class="header-right">
		<button on:click={handleMenuButton} class="mobile-button">
			<img src={open ? close : menu} alt="menu button" />
		</button>
		<nav class="desktop-nav">
			<a href="#home">Home</a>
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
	<nav class={`mobile-nav ${open ? 'opened' : ''}`}>
		<a href="#home">Home</a>
		<a href="#about">About</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact</a>
	</nav>
</header>

<style lang="scss">
	@import '../variables';
	header {
		background: white;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-shadow: 0px -56px 40px 40px $text;
		a {
			transition: all 0.3s ease-in-out;
			&:hover {
				color: $text-hover;
			}
		}
		.header-left {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			img {
				width: 2.5rem;
			}
			a {
				font-size: 18px;
				font-weight: 700;
			}
		}
		.header-right {
			.mobile-button {
				background: none;
				border: none;
				width: 2rem;
				height: 2rem;
				cursor: pointer;
				img {
					width: 100%;
				}
			}
			.desktop-nav {
				display: none;
				gap: 1.5rem;
				a {
					text-transform: uppercase;
					font-size: 18px;
					font-weight: 600;
				}
			}
		}
		.mobile-nav {
			width: 90%;
			position: absolute;
			top: 110%;
			left: -100%;
			display: flex;
			flex-direction: column;
			text-align: center;
			background: white;
			padding: 1rem;
			transition: all 0.3s ease-in-out;
			border-radius: 1rem;
			&.opened {
				left: 5%;
			}
			a {
				padding: 1rem 0;
				border-top: 1px solid $bg;
				font-weight: 600;
				&:nth-child(1) {
					border: none;
				}
			}
		}
		@media (min-width: 768px) {
			.header-left {
				gap: 0.75rem;
				a {
					font-size: 20px;
				}
			}
			.header-right {
				.mobile-button {
					display: none;
				}
				.desktop-nav {
					display: flex;
				}
			}
			.mobile-nav {
				display: none;
			}
		}
		@media (min-width: 1024px) {
			padding: 1.25rem 2rem;
			.header-left {
				a {
					font-size: 22px;
				}
			}
			.header-right {
				.desktop-nav {
					gap: 2rem;
				}
			}
		}
		@media (min-width: 1440px) {
			padding: 1.5rem 2.5rem;
			.header-left {
				gap: 1rem;
				img {
					width: 3rem;
				}
				a {
					font-size: 24px;
				}
			}
			.header-right {
				.desktop-nav {
					gap: 3rem;
					a {
						font-size: 20px;
					}
				}
			}
		}
		@media (min-width: 1920px) {
			padding: 1.5rem 4rem;
			.header-right {
				.desktop-nav {
					gap: 5rem;
					a {
						font-size: 20px;
					}
				}
			}
		}
	}
</style>
