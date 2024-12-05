import TeamSection from '@/module/TeamSection';

export default function PageNosotros() {
    return (
        <>
            <section className="relative h-screen md:h-[88vh] w-full flex items-center">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/Videos/Kronhos.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            </section>
            <TeamSection />
        </>
    );
}