import TeamSection from '@/module/TeamSection';

export default function PageNosotros() {
    return (
        <>
            <section className="relative h-[88vh] flex items-center">
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
                </div>
            </section>

            <TeamSection />
        </>
    );
}