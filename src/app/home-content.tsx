"use client";

import { PlatformSelector } from "@/components/PlatformSelector";
import { DramaSection } from "@/components/DramaSection";
import { ReelShortSection } from "@/components/ReelShortSection";
import { NetShortHome } from "@/components/NetShortHome";
import { MeloloHome } from "@/components/MeloloHome";
import { FlickReelsHome } from "@/components/FlickReelsHome";
import { FreeReelsHome } from "@/components/FreeReelsHome";
import {
  useForYouDramas,
  useLatestDramas,
  useTrendingDramas,
  useDubindoDramas,
} from "@/hooks/useDramas";
import { usePlatform } from "@/hooks/usePlatform";

export default function HomeContent() {
  const { isDramaBox, isReelShort, isNetShort, isMelolo, isFlickReels, isFreeReels } = usePlatform();

  // Fetch data for all DramaBox sections
  const {
    data: popularDramas,
    isLoading: loadingPopular,
    error: errorPopular,
    refetch: refetchPopular,
  } = useForYouDramas();

  const {
    data: latestDramas,
    isLoading: loadingLatest,
    error: errorLatest,
    refetch: refetchLatest,
  } = useLatestDramas();

  const {
    data: trendingDramas,
    isLoading: loadingTrending,
    error: errorTrending,
    refetch: refetchTrending,
  } = useTrendingDramas();

  const {
    data: dubindoDramas,
    isLoading: loadingDubindo,
    error: errorDubindo,
    refetch: refetchDubindo,
  } = useDubindoDramas();

  return (
    <main className="min-h-screen pt-16 text-slate-100 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* subtle blue glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Platform Selector */}
      <div className="sticky top-16 z-40 backdrop-blur-xl bg-blue-950/55 border-b border-blue-400/15">
        <div className="container mx-auto">
          <div className="px-4 py-3">
            <PlatformSelector />
          </div>
        </div>
      </div>

      {/* DramaBox Content - Multiple Sections */}
      {isDramaBox && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <DramaSection
            title="Populer"
            dramas={popularDramas}
            isLoading={loadingPopular}
            error={!!errorPopular}
            onRetry={() => refetchPopular()}
          />
          <DramaSection
            title="Terbaru"
            dramas={latestDramas}
            isLoading={loadingLatest}
            error={!!errorLatest}
            onRetry={() => refetchLatest()}
          />
          <DramaSection
            title="Terpopuler"
            dramas={trendingDramas}
            isLoading={loadingTrending}
            error={!!errorTrending}
            onRetry={() => refetchTrending()}
          />
          <DramaSection
            title="Dubindo"
            dramas={dubindoDramas}
            isLoading={loadingDubindo}
            error={!!errorDubindo}
            onRetry={() => refetchDubindo()}
          />
        </div>
      )}

      {/* ReelShort Content - Multiple Sections */}
      {isReelShort && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <ReelShortSection />
        </div>
      )}

      {/* NetShort Content */}
      {isNetShort && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <NetShortHome />
        </div>
      )}

      {/* Melolo Content */}
      {isMelolo && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <MeloloHome />
        </div>
      )}

      {/* FlickReels Content */}
      {isFlickReels && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <FlickReelsHome />
        </div>
      )}

      {/* FreeReels Content */}
      {isFreeReels && (
        <div className="container mx-auto px-4 py-8 space-y-10">
          <FreeReelsHome />
        </div>
      )}
    </main>
  );
}
