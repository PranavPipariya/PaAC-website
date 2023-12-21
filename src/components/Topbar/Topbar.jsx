import { NavLink } from "react-router-dom";
import "./Topbar.css";
import Logo from "../assets/iitr_logo.webp";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Topbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="topbar-container">
      <div className="topbar-top">
        <NavLink to="/">
          <img src={Logo} className="small-screen-logo" alt=""></img>
        </NavLink>
      </div>
      <div className="topbar-navs">
        <NavigationMenu.Root className="NavigationMenuRoot">
          <NavigationMenu.List className="NavigationMenuList">
            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/">
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/people"
              >
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Activities
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <li className="ListItem">
                    <NavigationMenu.Link
                      className="NavigationMenuLink"
                      href="/library"
                    >
                      Library
                    </NavigationMenu.Link>
                  </li>
                  <li className="ListItem">
                    <NavigationMenu.Link
                      className="NavigationMenuLink"
                      href="/events"
                    >
                      Events
                    </NavigationMenu.Link>
                  </li>
                  <li className="ListItem">
                    <NavigationMenu.Link
                      className="NavigationMenuLink"
                      href="/open-projects"
                    >
                      Open Projects
                    </NavigationMenu.Link>
                  </li>
                  <li className="ListItem">
                    <NavigationMenu.Link
                      className="NavigationMenuLink"
                      href="/jc"
                    >
                      Journal Club
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item></NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/gallery"
              >
                Gallery
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/contact-us"
              >
                Contact
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="NavigationMenuIndicator">
              <div className="Arrow" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>
        </NavigationMenu.Root>
      </div>
      <div className="mobile-menu">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="DropdownMenuTrigger" asChild>
            <button
              className="IconButton"
              aria-label="Customise options"
              onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}
            >
              {toggle ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal className="mobile-menu-dropdown">
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={5}
            >
              <DropdownMenu.Item className="DropdownMenuItem">
                <NavLink className="DropdownMenuLink" to="/">
                  Home
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                <NavLink className="DropdownMenuLink" to="/people">
                  About
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/library">
                  Library
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/events">
                  Events
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/open-projects">
                  Open Projects
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/jc">
                  Journal Club
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/gallery">
                  Gallery
                </NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                <NavLink className="DropdownMenuLink" to="/contact-us">
                  Contact
                </NavLink>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
