import { useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button onClick={onToggle}>Toggle</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};