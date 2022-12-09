import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faRightFromBracket,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../lib/authContext";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export const Navbar = ({
	menuButton,
	setSideMenuOpen,
	openAddToListDialog,
}) => {
	const [searchBarOpen, setSearchBarOpen] = useState(false);

	const { logout } = useAuth();

	const searchBarProps = {
		searchBarOpen: searchBarOpen,
		setSearchBarOpen: setSearchBarOpen,
		openAddToListDialog: openAddToListDialog,
	};

	return (
		<nav className="fixed z-40 h-14 w-full bg-gray-700 drop-shadow-sm">
			<div className="mx-auto flex h-full max-w-screen-2xl flex-row justify-between text-gray-100">
				<div
					className={`ml-4 flex min-w-[91px] flex-row lg:ml-10 lg:min-w-[207px] ${
						searchBarOpen ? "hidden" : ""
					} sm:flex`}
					id="nav-left"
				>
					<div
						className="pr-6 leading-[56px] lg:hidden"
						ref={menuButton}
					>
						<FontAwesomeIcon
							icon={faBars}
							size="xl"
							className="hover:cursor-pointer"
							id="menu-button"
							onClick={() => setSideMenuOpen(true)}
						/>
					</div>
					<div className="h-full" id="brand-logo">
						<Link to="/">
							<span className="h-full text-3xl font-bold leading-[54px]">
								WL
							</span>
						</Link>
					</div>
					<div
						className="ml-10 hidden flex-row leading-[60px] lg:flex"
						id="nav"
					>
						<div id="nav-lists">
							<Link to="/lists">
								<p
									className="text-md h-full"
									onClick={() => setSideMenuOpen(false)}
								>
									Lists
								</p>
							</Link>
						</div>
						<div className="ml-7" id="nav-favorites">
							<Link to="/favorites">
								<p
									className="text-md h-full"
									onClick={() => setSideMenuOpen(false)}
								>
									Favorites
								</p>
							</Link>
						</div>
					</div>
				</div>
				<>
					<SearchBar {...searchBarProps} />
				</>

				<div
					className={`mr-4 flex min-w-[91px] flex-row justify-end lg:mr-10 lg:min-w-[207px] ${
						searchBarOpen ? "hidden" : ""
					} sm:flex`}
					id="nav-right"
				>
					<div
						className="mr-6 leading-[56px] sm:hidden"
						id="search-button"
					>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size="xl"
							className="hover:cursor-pointer"
							onClick={() => setSearchBarOpen(true)}
						/>
					</div>
					<div className="leading-[56px]" id="logout-button">
						<FontAwesomeIcon
							icon={faRightFromBracket}
							size="xl"
							className="hover:cursor-pointer"
							onClick={logout}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};
