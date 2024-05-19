import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/20 text-[20px] hover:text-white dark:hover:text-primary transition-all'/>
          <div className="text-muted-foreground xl:text-white/80">
            Copyright &copy; Muhammad Zaidan Nabih. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;